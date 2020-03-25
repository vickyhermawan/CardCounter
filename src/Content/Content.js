import React from 'react';
import './Content.css';
import { Col, Row} from 'antd';
import Counter from './Counter';
import Navbar from '../Menu/navbar'

class Content extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cardData:[
        {
          id: 1,
          nama: "Annastasya",
          job: "Software Engineer",
          img: require('../Picture/picture.png'),
          ava: require('../Picture/picture.png'),
          link: 'diisi ignya sendiri'
        },
        {
          id: 2,
          nama: "Pierre F",
          job: "Chemical Engineer",
          img: require('../Picture/picture.png'),
          ava: require('../Picture/picture.png'),
          link: 'disisi ignya terserah'
        },
        {
          id: 3,
          nama: "Doinya Asya",
          job: "UI/UX",
          img: require('../Picture/picture.png'),
          ava: require('../Picture/picture.png'),
          link: 'github.com'
        }
      ]
    }
  }
  
  render(){
    return (
      <div>
      <Navbar/>
      <div className="site-card-wrapper" style={{textAlign:"center"}}>
        <Row gutter={[16,16]}>
        {this.state.cardData.map((data,index)=>
          <Col key={index}  xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Counter nama={data.nama} job={data.job} img={data.img} ava={data.ava} link={data.link}/>
          </Col>
        )}
        </Row>
      </div>
      </div>
    );
  }
}
{/* <Card extra={data.icon} title={data.nama} bordered={false} className="inside" >
  <Tooltip title="Job">

  </Tooltip>
</Card> */}
export default Content;
