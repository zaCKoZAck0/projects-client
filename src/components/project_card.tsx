import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import List from './list';


export type ProjectCards = {
    id: number,
    title: string,
    technologies: string,
    backend: string,
    frontend: string,
    databases: string,
    infrastructure: string
}

function ProjectCard(props: ProjectCards) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<>


  <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='display-3'>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <h2 className='h2 p-2 bg-secondary text-light'>
                .Project Details
            </h2>
        <h3 className='h4 text-uppercase text-muted bullet-heading font-monospace'>
            <u>Technologies</u>
        </h3>
        <List s={props.technologies} />
        <h3 className='h4 p-2 bg-secondary text-light'>
            ..Technical Skillset
        </h3>
        <h3 className='h4 text-uppercase text-muted bullet-heading font-monospace'>
            <u>Frontend</u>
        </h3>
        <List s={props.frontend} />
        <h3 className='h4 text-uppercase text-muted bullet-heading font-monospace'>
            <u>Backend</u>
        </h3>
        <List s={props.backend} />
        <h3 className='h4 text-uppercase text-muted bullet-heading font-monospace'>
            <u>Databases</u>
        </h3>
        <List s={props.databases} />
        <h3 className='h4 text-uppercase text-muted bullet-heading font-monospace'>
            <u>Infrastructure</u>
        </h3>
        <List s={props.infrastructure} />
        </Offcanvas.Body>
      </Offcanvas>


    <Card className='project-card col-sm-12 col-md-6 col-lg-3' onClick={handleShow} style={{ width: '18rem' }}>
    <Card.Title>
        <h2 className='h5'>
            {props.title}
        </h2>
    </Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>
            <div className='small text-muted text-center fw-light font-monospace'>
                *Technologies*
            </div>
            <div className='text-sm text-truncate'>
                {props.technologies || "-"}
            </div>
        </ListGroup.Item>
        <ListGroup.Item className='bg-secondary text-light'>
            <div className='small text-center'>
                Technical Skillset
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className='small text-muted text-center fw-light font-monospace'>
                *Frontend*
            </div>
            <div className='text-sm text-truncate'>
                {props.frontend || "-"}
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className='small text-muted text-center fw-light font-monospace'>
                *Backend*
            </div>
            <div className='text-sm text-truncate'>
                {props.backend || "-"}
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className='small text-muted text-center fw-light font-monospace'>
                *Databases*
            </div>
            <div className='text-sm text-truncate'>
                {props.databases || "-"}
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className='small text-muted text-center fw-light font-monospace'>
                *Infrastructure*
            </div>
            <div className='text-sm text-truncate'>
                {props.infrastructure || "-"}
            </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  );
}

export default ProjectCard;