// import { createRoot } from "react-dom/client";
import Card from "antd/es/card/Card";




const TeamPic =() => {

  


    return (

        <section>
        <div>
            Team
        </div>
        <div>
        <Card style={{width:"150px",height:"300px"}}    cover={<img alt="example" src="about.svg" />}
  >

        </Card>
        </div>
        </section>
    );
};

// const ComponentDemo = App;


// createRoot(mountNode).render(<ComponentDemo />);


export default TeamPic;