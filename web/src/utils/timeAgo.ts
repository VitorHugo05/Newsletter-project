export default function timeAgo(timestamp: string | number | Date): String {
    const now = new Date();
    const postDate = new Date(timestamp);
    const differenceInSeconds: number = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    const intervals = [
        { label: "ano", seconds: 31536000 },
        { label: "mê", seconds: 2592000 },
        { label: "dia", seconds: 86400 },
        { label: "hora", seconds: 3600 },
        { label: "minuto", seconds: 60 },
        { label: "segundo", seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(differenceInSeconds / interval.seconds);
        if (count > 0) {
            return `postado há ${count} ${interval.label}${count > 1 ? "s" : ""}`;
        }
    }

    return "postado agora";
}
