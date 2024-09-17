
import Paragraph from "./Components/Paragraph";
import iconStar from "./Assets/iconStar.png";

function App() {
  return (
    <div className="App">
      <div className="backgroundImg"></div>
      <div className="appContent">
        <div className="appContentTitle">
          <img src={iconStar} alt="star" className="appContentTitleIcon" />
          <h1>FAQs</h1>
        </div>
        < Paragraph
          title="What is Fronted Mentor, and how will it help me ?"
          text="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, 
          CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
        />
        <hr className="appContentParagraphLine" />
        < Paragraph
          title="Is Frontend Mentor free?"
          text="Yes, Frontend Mentor offers both free and premium coding challenges, 
          with the free option providing access to a range of projects suitable for all skill levels."
        />
        <hr className="appContentParagraphLine" />
        < Paragraph
          title="Can I use Frontend Mentor projects in my portfolio?"
          text="Yes, you can use projects completed on Frontend Mentor in your portfolio. 
          It's an excellent way to showcase your skills to potential employers!"
        />
        <hr className="appContentParagraphLine" />
        < Paragraph
          title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
          text="The best place to get help is inside Frontend Mentor's Discord community. 
          There's a help channel where you can ask questions and seek support from other community members."
        />
      </div>
    </div>
  );
}

export default App;