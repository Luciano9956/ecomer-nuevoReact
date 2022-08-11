import React from "react";
import { FcShop } from "react-icons/fc";




const Footer = () => {

    return (
        <footer className="z-depth-5" style={styles.footer}>
          <section  style={styles.sec1}>
           <div style={styles.sec1Div}>
            <FcShop/>
           <p>Elegi como pagar</p>
           </div> 
           <div style={styles.sec1Div}>
            <FcShop />
            <p>Envios a todo el pais</p>
           </div>
           <div style={styles.sec1Div}>
            <FcShop />
            <p> Tus datos protegidos</p>
           </div>
           </section>
           <section style={styles.sec2}>
           <div >
           <a target="_blank" href="https://www.linkedin.com">
            <FcShop style={styles.link} />
           </a>
           <a target="_blank" href="https://github.com"> 
            <FcShop style={styles.link} />
            </a>
            </div>
            <h4 style={styles.h4} >Desarrollado por </h4>
            </section>
        </footer>
    )

}

export default Footer;

const styles = {
footer:{
    backgroundColor: '#ffebee',
    display: 'flex',
    flexDirection: 'column',
    
},

sec1:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '5%',
},

sec1Div:{
    display: 'flex',
    justifyContent:"center",
    padding: '3%',
},

sec2:{
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '45%',
    paddingRight: '45%',
    justifyContent:"center",
},

h4:{
    fontSize: '100%',
    textAling: 'center',
    justifyContent:"center",
},

link:{
    textDecoration: 'none',
    color: 'black',
    fontSize: '300%',
    paddingTop: '5%',
}
,
}