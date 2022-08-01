import React from "react";

// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Dashboard(props) {
  const notificationAlertRef = React.useRef(null);
  const notify = (place,message,type,icon) => {
    var options = {};
    options = {
      place: place,
      message: message,
      type: type,
      icon: icon,
      autoDismiss: 20,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">


        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>


        <Row>
        <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h2">
                        Nuestros Servicios:
                        <p className="category">Click para una breve descripcion</p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="success"
                            onClick={() => notify("bl","Creamos tus sitios y aplicaciones Web personzalizadas y responsivas. Paginas con certificado de seguridad SSL y correos corporativos contacto@tuempresa.com Consulta en el menu esta seccion para conocer mas sobre estas soluciones","success","tim-icons icon-components")}
                          >
                            Desarrollo Web
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="info"
                            onClick={() => notify("bc","Aplicaciones y videojuegos para realidad virtual, imagina capacitar a tus colaboradores o estudiantes en un ambiente practico 100% virtual y libre de cables (Oculus Quest)","info","tim-icons icon-app")}
                          >
                            Realidad Virtual
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("br","Desarrollo de videojuegos para Computadora y celular (android), podemos realizar para ti un juego personalizado en donde tu seas el caracter principal, o que tal un juego educativo para ensenar fisica? tu lo imaginas y nosotros lo hacemos por ti","primary","tim-icons icon-controller")}
                          >
                            Videojuegos
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-center" sm="12">
                    <CardTitle tag="h1">Ultimas Noticias</CardTitle>
                  </Col>
                  <Col className="text-center" sm="12">
                    <CardTitle tag="h4">Conoce nuestra aplicacion para calibrar miras con mas de 10k descargas en la playstore:</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="text-center">
                <Row>
                <Col className="text-center" sm="12">
                <iframe width="300" height="250" src="https://www.youtube.com/embed/SzWfnEyUsjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                </Row> 
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>



    </>
  );
}

export default Dashboard;
