import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import  {Row, Col} from "antd";
import React from "react";



const TeamPic =() => {

  


    return (

        <section style={{width:"1500px", backgroundColor:"white"}}>
        
      
        <div style={{marginLeft:"80px"}}>
            <Row >
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="J Sujith" description="Director" />
        </Card></Col>
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="Magie GR" description="Director" />
        </Card></Col>
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="Aadhil Muhammed H" description="HR Executive" />
        </Card></Col>
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="Sangeetha TP" description="Business Development Executive" />
        </Card></Col>
        </Row><br/>
        <Row>
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="J Sujith" description="Director" />
        </Card></Col>
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="Magie R" description="Director" />
        </Card></Col>
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="Aadhil Muhammed H" description="Director" />
        </Card></Col>
        <Col span={6}><Card style={{width:"280px",height:"385px"}}    cover={<img alt="example"  src="team1.svg" />} >
        <Meta style={{fontFamily:"Poppins"}} title="Sangeetha TP" description="Director" />
        </Card></Col>
        </Row>
        </div>
        </section>
    );
};



export default TeamPic;