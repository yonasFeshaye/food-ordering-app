export async function POST(req) {
    const data = await req.formData()
    if (data.has('file')) {
        const file = data.get('file')
        const fileName = file.name
        const fileContents = await file.text()
        console.log(fileName, fileContents)
    }
    return Response.json(true)
}