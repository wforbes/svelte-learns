import { writeFileSync, existsSync, mkdirSync } from "fs";
import { error, json } from "@sveltejs/kit";

const uploadDir = '/items';
const uploadPath = 'static/items';

if (!existsSync(uploadPath)) {
	mkdirSync(uploadPath, { recursive: true });
}

export async function POST({ request }: { request: Request }) {
	try {
		const data = await request.formData();
		const name = data.get('itemName') as string;
		const imageFile = data.get('itemImage') as File | null;

		console.log("imageFile", imageFile);
		console.log("typeof imageFile", typeof imageFile);

		if (!name || name === '') {
			throw error(400, 'Name is required');
		}

		let imagePath = null;
		console.log('imageFile', imageFile);
		if (imageFile && imageFile.name && imageFile.size > 0) {

			const filePath = `${uploadPath}/${imageFile.name}`;
			writeFileSync(filePath, Buffer.from(await imageFile.arrayBuffer()));
			imagePath = `${uploadDir}/${imageFile.name}`;
		}

		return json({
			name,
			imagePath
		});
	} catch (err) {
		if (err && typeof err === 'object' && 'status' in err) {
			const httpError = err as { status: number, body: { message: string } };
			throw error(httpError.status, httpError.body.message);
		}
		throw error(500, 'An unexpected server error occurred.');
	}
}
