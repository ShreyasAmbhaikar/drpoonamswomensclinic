import os
from PIL import Image

src_image = "c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images\\service-menstrual-problems.webp"

dest_overview = "c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images\\menstrual-problems-overview.webp"
dest_prep = "c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images\\menstrual-problems-prep.webp"

def crop_and_resize(img_path, target_width, target_height, dest_path):
    print(f"Processing {img_path}...")
    if not os.path.exists(img_path):
        print(f"Error: {img_path} does not exist")
        return
        
    with Image.open(img_path) as img:
        img_width, img_height = img.size
        print(f"Original size: {img_width}x{img_height}")
        
        target_aspect = target_width / target_height
        img_aspect = img_width / img_height
        
        if img_aspect > target_aspect:
            # Image is wider than target aspect ratio, crop sides
            new_width = int(target_aspect * img_height)
            offset = (img_width - new_width) // 2
            box = (offset, 0, offset + new_width, img_height)
        else:
            # Image is taller than target aspect ratio, crop top and bottom
            new_height = int(img_width / target_aspect)
            offset = (img_height - new_height) // 2
            box = (0, offset, img_width, offset + new_height)
            
        cropped_img = img.crop(box)
        resized_img = cropped_img.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        # Save as WebP
        resized_img.convert("RGB").save(dest_path, "webp", quality=90)
        print(f"Saved optimized image {target_width}x{target_height} to {dest_path}")

crop_and_resize(src_image, 926, 418, dest_overview)
# For the prep image, we crop it from contraception-prep.webp which has the standard checklists layout matching the sizes
src_prep = "c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images\\contraception-prep.webp"
crop_and_resize(src_prep, 838, 418, dest_prep)
