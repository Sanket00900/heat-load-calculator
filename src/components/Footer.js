import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <p className="text-center"><b><i>"Optimize your indoor environment."</i></b></p>
                <div className="footer-list">
                    {/* <p className="footer-name">
                        <a href="index.html">kedar basutkar</a>
                    </p> */}
                    {/* <p className="copyright-text">© 2022 GCOF. all rights reserved</p> */}
                </div>
                <table>
                    <tr>
                        <td className="color1"></td>
                        <td className="color2"></td>
                        <td className="color3"></td>
                        <td className="color4"></td>
                    </tr>
                </table>
            </div>
        </footer>    
    )
}