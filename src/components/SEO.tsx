import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

export const SEO = ({ title, description, canonical }: SEOProps) => {
    useEffect(() => {
        document.title = `${title} | Bluemantle LLP`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", title);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute("content", description);

        // Update Canonical
        if (canonical) {
            let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonical);
        }
    }, [title, description, canonical]);

    return null;
};
