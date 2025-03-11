// Universal Icon component for Next.js using lucide-react icons.
// All comments, documentation, and logging are in English.

import React from 'react';
import * as LucideIcons from 'lucide-react';

// Pre-converted mapping: menu keys mapped directly to lucide-react component names in PascalCase.
const iconMapping = {
    "presentations": "Presentation",
    "brochures": "BookOpen",
    "architectural-projects": "Building",
    "stickers-stickerpacks": "Sticker",
    "diplomas-acknowledgments": "Award",
    "catalogs": "List",
    "patterns": "LayoutGrid",
    "forms": "Clipboard",
    "badges": "Badge",
    "certificates": "File",
    "business-cards": "IdCard",
    "postcards": "MailOpen",
    "tags": "Tag",
    "calendars": "Calendar",
    "menu": "Menu",
    "price-tags": "DollarSign",
    "flyers": "Newspaper",
    "booklets": "BookOpenText",
    "notepads": "Notebook",
    "hangers": "Shirt",
    "books": "Book",
    "envelopes": "Mail",
    "labels": "Bookmark",
    "shaped-paper-products": "Scissors",
    "drawings": "Pencil",
    "tablets": "Tablet",
    "tracing-paper-print": "Copy",
    "posters-bills": "GalleryHorizontal",
    "self-adhesive-print": "StickyNote",
    "photo-wallpaper": "Image",
    "oracal-print": "Printer",
    "banner-print": "Megaphone",
    "canvas-print": "Palette",
    "spider-banner": "Network",
    "roll-up-banner": "ArrowBigUp",
    "color-print": "Paintbrush",
    "black-and-white-print": "Contrast",
    "large-format-print": "Expand",
    "sheet-print": "FileText",
    "lamination": "Layers",
    "hard-cover": "Shield",
    "soft-cover": "BookOpenCheck",
    "digital-banner-print": "Computer",
    "plotter-cutting": "Crop",
    "offset-printing": "Factory",
    "post-print-processing": "Cog",
    "personalization": "User",
    "film-applying": "Film",
    "selection": "Check",
    "how-to-order": "ShoppingCart",
    "get-a-quote": "Calculator",
    "design-requirements": "LayoutTemplate",
    "how-to-pay": "CreditCard",
    "delivery": "Truck",
    "materials-catalog": "Folder",
    "smallFormat": "Grid2X2",
    "largeFormat": "Grid3X3",
    "services": "Wrench",
    "support": "LifeBuoy",
    "contacts": "Phone"
};

/**
 * Universal Icon component.
 *
 * This component dynamically renders an icon from lucide-react based on a provided menu key.
 * It looks up the icon component name from the pre-converted iconMapping and renders it.
 *
 * @param {object} props - Component props.
 * @param {string} props.menuKey - The key representing the menu item (must exist in iconMapping).
 * @returns {JSX.Element|null} - The rendered icon component, or null if not found.
 */
export const MenuIcon = ({ menuKey, ...props }: { menuKey: keyof typeof iconMapping, [key: string]: any }) => {
    const iconName = iconMapping[menuKey];

    if (!iconName) {
        console.warn(`Icon for menuKey "${menuKey}" not found in iconMapping.`);
        return null;
    }

    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<any>;

    if (!IconComponent) {
        console.warn(`Lucide icon component "${iconName}" not found.`);
        return null;
    }

    return <IconComponent {...props} />;
};

export default MenuIcon;
