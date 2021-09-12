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
  Table,
  Row,
  Col,
  UncontrolledCollapse
} from "reactstrap";



function Web (props) {
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
        <Row>
          
          <Col xs="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="12">
                      <CardTitle tag="h2">
                        Soluciones profesionales para tu negocio u organizacion:
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="12">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="warning"
                            onClick={() => notify("tl","Un sitio web flexible, personalizado y responsivo. Nosotros nos encargamos de todo desde el dominio, hosting, agregarlo a los buscadores de google o promocionarlo con google ads","success","tim-icons icon-world")}
                          >
                            Desarrollamos tu sitio web
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="info"
                            onClick={() => notify("bc","Comienza a vender tus articulos con tu propia tienda en linea, hacemos que tus clientes potenciales te encuentren con google ads","info","tim-icons icon-cart")}
                          >
                            Creamos tu Tienda en linea
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tr","Obten correos profesionales para tu organizacion al mejor costo, por ejemplo ventas@empresa.com","primary","tim-icons icon-email-85")}
                          >
                            Cuenta de email personalizada
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Button className="btn-round " color="success" size="lg" block id="toggler" >
                    <span>Ver listado de servicios</span><i className="tim-icons icon-bullet-list-67"/>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                      <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Lista de servicios de desarrollo Web:</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Servicio</th>
                        <th>Descripcion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Construccion de tu sitio web</td>
                        <td>Construimos tu sitio web reponsivo sin el uso de herramientas automatizados, esto nos permite brindarte flexibilidad en la apariencia de tu pagina web, ademas indexamos tu sitio a los buscadores de google</td>
                      </tr>
                      <tr>
                        <td>Aplicaciones web</td>
                        <td>Desarrollamos tu aplicacion web programando el backend para realizar funciones como generacion de QRs, base de datos, envio automatico de correos electronicos, etc.</td>
                      </tr>
                      <tr>
                        <td>Tiendas en linea</td>
                        <td>Podemos desarrollar tu e-commerce, no importa si eres un pequeno negocio. Actualmente trabajamos con Stripe para recibir pagos en linea lo que te permite aceptar pagos incluso en OXXO y con comisiones muy bajas</td>
                      </tr>
                      <tr>
                        <td>Correo empresarial</td>
                        <td>Ofrecemos cuentas ilimitadas en webmail para un correo profesional p.e. contacto@tuempresa.com</td>
                      </tr>
                      <tr>
                        <td>Analitica</td>
                        <td>Informes mensuales sobre el comportamiento de tu sitio web (Busquedas en google, numero visitas, etc.)</td>
                      </tr>
                      <tr>
                        <td>Configuracion de dominios</td>
                        <td>Adquirimos y registramos el dominio de tu empresa p.e. www.nombredetuempresa.com</td>
                      </tr>
                      <tr>
                        <td>Alojamiento de tu sitio web (Hosting)</td>
                        <td>Alojamos tu sitio web en los servidores mas economicos, seguros y con alta disponibilidad en el mercado, actualmente utilizamos Hostgator y Firebase de google</td>
                      </tr>
                      <tr>
                        <td>Maquetacion de tu pagina</td>
                        <td>Al momento de solicitar una cotizacion te enviamos un maquetado de como lucira tu sitio web</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>             
                    </UncontrolledCollapse>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>


          <Col xs="12">
            <Card>
            <CardHeader>
                <Row>
                  <Col className="text-center" sm="12">
                    <CardTitle tag="h2">Nuestros Clientes:</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col className="ml-auto mr-auto" xs="8" sm="8">
                        <Col className="ml-auto mr-auto" sm="12">
                          <h2>Restaurante el lugar del chamorro</h2>
                        </Col>
                        <Col className="ml-auto mr-auto" sm="12">
                        <a href="https://www.ellugardelchamorro.com" class="btn btn-default btn-round" role="button" aria-disabled="true">Visitar</a>
                        </Col>
                    </Col>
                        
                      <Col className="ml-auto mr-auto" xs="4" sm="4">
                            <img
                              alt="El Lugar del Chamorro"
                              src={require("assets/img/chamorro logo 2.jpg").default}
                            />
                      </Col>
                  </Row>
              </CardBody>
              <CardBody>
                  <Row>
                    <Col className="ml-auto mr-auto" xs="8" sm="8">
                        <Col className="ml-auto mr-auto" sm="12">
                          <h2>Servicio de envios a domicilio GoFast</h2>
                        </Col>
                        <Col className="ml-auto mr-auto" sm="12">
                        <a href="https://gofasthuasca.com/" class="btn btn-default btn-round" role="button" aria-disabled="true">Visitar</a>
                        </Col>
                    </Col>
                        
                      <Col className="ml-auto mr-auto" xs="4" sm="4">
                            <img
                              alt="El Lugar del Chamorro"
                              src={require("assets/img/logo GoFast.png").default}
                            />
                      </Col>
                  </Row>
              </CardBody>
            </Card>
          </Col>
        
        </Row>

        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>


      </div>



    </>
  );
}

export default Web;
