import imageGit from '../icons8-github-375.png'


function Footer(){
    return(
        <div className="footer">
<div className='gitHub'>
    <a href='https://github.com/TatianaBrt' target='blank'>
   <img src={imageGit} alt='icon' width='30px' /> 
   </a>   
   </div>     
<p className='textFooter'>Created by Tatiana Bryzgalova 2023 all rights reserved.</p>
        </div>
    )
}

export default Footer;