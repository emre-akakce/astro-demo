import PList from "../components/PList";
import ReactDOMServer from 'react-dom/server';

export async function GET() {
    // Fetch the data
    const response = await fetch('http://localhost:5555/cep-tel2');
    const data = await response.json(); // Extract JSON from response

    // Render the React component to a string
    const componentHtml = ReactDOMServer.renderToString(PList({ data }));

    // Return the rendered HTML as the response
    return new Response(componentHtml, {
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
    });
}
