import './style.css'
import Logo from '../Logo';

function Footer(){
    return(
        <div className='footer_container'>
            <section className='footer_section_1'>
                <div className='footer_section_1-components'>
                    <Logo size={'170px'}/>
                    <p className='copyright-text'>Copyright © 2023 GoBarther. All rights reserved.</p>
                </div>
            </section>
        </div>
    );
}

export default Footer;