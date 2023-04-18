import Uploading from '../Uploading.svg'
import Done from '../Done.svg'
import Action from '../Action.svg'
import Error from '../Error.svg'
import BarProgresso from '../barProgresso.svg'
import Retur from '../retur.svg'
import SemPorcent from '../semPorcent.svg'
import SemNada from '../SemNada.svg'

const Files = () => {

    return (
        <section className="files">
            <div className="box Uploading">
                <div className="icon">
                    <img src={Uploading} alt="" />
                </div>
                <div className="info">
                    <div className="filename">Scann_158.pdf</div>
                    <div className="filesize">
                        <span>35 MB /</span>
                        <span>70 MB</span>
                    </div>
                    <div className="bar">
                        <img src={BarProgresso} alt="" />
                        {/* <span>46%</span> */}
                    </div>
                </div>
                <div className="action">
                    <img src={Action} alt="" />

                </div>
            </div>
            <div className="box done">
            <div className="icon">
                    <img src={Done} alt="dsf" />
                </div>
                <div className="info">
                    <div className="filename">README.rm</div>
                    <div className="filesize">
                        <span>12 KB</span>
                    </div>
                    <div className="bar">
                        <img src={SemPorcent} alt="" />
                        {/* <span>100%</span> */}
                    </div>
                </div>
                
            </div>
            <div className="box error">
            <div className="icon">
                    <img src={Error} alt="dsf" />
                </div>
                <div className="info">
                    <div className="filename">Picture1.jpeg</div>
                    <div className="filesize">
                        <span>6.3 MB</span>
                    </div>
                    <div className="bar">
                        <img src={SemNada} alt="" />
                        {/* <span>Erro</span> */}
                    </div>
                </div>
                <div className="action">
                    <img src={Retur} alt="" />

                </div>
            </div>
        </section>
    )
}

export default Files