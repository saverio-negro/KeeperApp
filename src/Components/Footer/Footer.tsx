import "./Footer.css";

function Footer({ author }: { author: string }) {

    const date = new Date();

    return (
        <footer>
            <p>{`© ${date.getFullYear()} ${author}`}</p>
        </footer>
    );
}

export default Footer;