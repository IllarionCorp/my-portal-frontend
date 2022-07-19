import '../../blocks/Header.css';
import HeaderRight from './HeaderRight';


export default function Header(props) {
    return (
        <header className="header">
            <div className='header__container'>
                <h1 className="header__title">IllarionCorp</h1>
            </div>
            <HeaderRight modefi={props.modefi}/>
        </header>
    );
}