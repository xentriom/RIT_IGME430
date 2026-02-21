const sharp = require("sharp");
const supabase = require("./db");

// https://www.npmjs.com/package/sharp
// https://supabase.com/docs/reference/javascript/storage-listbuckets
// Basically a combo of the two above
const optimizeAndUpload = async (buffer, fileName, bucket) => {
  try {
    // timestamp-name.webp
    const sfn = `${Date.now()}-${fileName.toLowerCase().replace(/\s+/g, "-")}.webp`;

    // Optimize the image
    const optimizedBuffer = await sharp(buffer)
      .resize(512, 512, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();

    // Attempt upload
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(sfn, optimizedBuffer, {
        contentType: "image/webp",
        upsert: false,
      });

    if (error) {
      console.error(`Image upload error (${bucket}):`, error);
      return { url: null, error };
    }

    // Get the public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucket).getPublicUrl(data.path);

    return { url: publicUrl, error: null };
  } catch (error) {
    console.error(`Image optimization error:`, error);
    return { url: null, error };
  }
};

module.exports = {
  optimizeAndUpload,
};
