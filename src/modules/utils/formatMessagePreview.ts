export default function formatMessagePreview (str: string, length: number) {
    if (str.length > length) {
        return str.substring(0, length) + '...';
    }
    return str;
}