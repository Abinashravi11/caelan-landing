# Assets Folder

Place your static assets here:

- **images/** - Put all image files (PNG, JPG, SVG, etc.)
- **icons/** - Put icon files and SVG icons

## Usage in Components

To use assets in your Next.js components:

```tsx
import Image from "next/image";

// For images
<Image src="/assets/images/your-image.png" alt="Description" width={500} height={300} />

// For icons/svgs
<img src="/assets/icons/your-icon.svg" alt="Icon" />
```
