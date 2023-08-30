import image from '../user (3).png';
import imageReact from '../react.png';
import imageJs from '../js1.png';
import imageNode from '../nodeicon.png';
import imageGsap from '../gsap.png';
import imageBootstrap from '../bootstrap (1).png';
import imageCSS from '../css-3 (1).png';
import imageHTML from '../html (1).png';
import imageGithub from '../github-sign (1).png';

function Skills(){
    
    return(
        
            <div>
                 <div className='skills'>
            <img className='iconSkills' src={image} alt='icon' width='100px'/>
            </div>
            <h1 className='headerSkills'>SKILLS</h1>
           <div className='icons' >
           <img className='iconSkill' src={imageReact} alt='icon'/>
           <img className='iconSkill'  src={imageJs} alt='icon'/>
           <img className='iconSkill' src={imageNode} alt='icon'/>
           <img className='iconSkill' src={imageBootstrap} alt='icon'/>
           <img className='iconSkill' src={imageGithub} alt='icon'/>
           <img className='iconSkill' src={imageGsap} alt='icon'/>
           <img className='iconSkill' src={imageHTML} alt='icon'/>
           <img className='iconSkill' src={imageCSS} alt='icon'/>
           </div>

            </div>
        
    )
}

export default Skills;