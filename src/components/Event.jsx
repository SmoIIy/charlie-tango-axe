import { QueryClient, QueryClientProvider, ReactQueryDevTools } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Event() {
    return (
        <QueryClientProvider>
        <article>
            <h1>{eventInfo.name}</h1>
            <dl>
                <dt>Hvornår</dt>
                <dd>{eventInfo.when}</dd>
            </dl>
            <p>{eventInfo.description}</p>
            <section>
                <h2>Kommentarer</h2>
                {comments.map((c) => (
                <div key={c.id}>
                    <dl>
                    <dt>{c.name}</dt>
                    <dd>{c.comment}</dd>
                    </dl>
                </div>
                ))}

            </section>
        </article>
        <ReactQueryDevTools />
        </QueryClientProvider>
    )
}

