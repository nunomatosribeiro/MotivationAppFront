import '../Homepage.css'
function HomePage () {

    return (
        
        <div className='containerHomePage1'>
        <div className='section1'>
            
<section>
<h1>Welcome to The Motivation App</h1>

<h3>Evaluate your motivation with 18 simple questions!</h3>
<div className="scroll-down"></div>
</section>

        </div>
        
        
        <section className='Section2'>
            <div className='allSection2'>
                <div className='divSection2'>
        <h1>Introducing the Mind Behind It</h1>
        <h4>Prof. Dr. João Carlos Oliveira</h4>
        <p>Holder of a PhD in Psychology from the Faculty of Psychology, University of Porto. </p>
<p>With a profound expertise in the realm of motivation within work contexts, 
    Dr. Oliveira offers you the opportunity to explore new horizons and uncover your full potential 
    through the power of a positive mindset.</p>
</div>
                <div className='imgDiv' >

                <img className='image2'src='../images/JoaoOliveiraImage2.jpg' alt='image2' />
                </div>
                </div>
                </section>

                <section className='Section3'>
                    <div className='divForAllSection3'>
                <div className='firstParagraphSection3'>
                <div className='textDiv'>
                <h2>How this few questions will help you?</h2>
                <p>Text here</p>
                </div>
                <img className='section3Image1'src='../images/section3Image.jpg' alt='section3Image1' />
                </div>

                <div className='secondParagraphSection3'>
                    <div className='textDiv'>
                <h2>What is motivation</h2>
                <p>text</p>
                </div>
                <img className='section3Image2'src='../images/section3Image2.webp' alt='section3Image2' />
                </div>

                <div className='thirdParagraphSection3'>
                <div className='textDiv'>
                <h2>Title here</h2>
                <p>What will you learn from this app</p>
                </div>
                <img className='section3Image3'src='../images/section3mage3.jpg' alt='section3Image3' />
                
                </div>
                </div>
                </section>
                </div>
    )
}

export default HomePage;