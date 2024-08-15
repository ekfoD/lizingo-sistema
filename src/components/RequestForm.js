import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function RequestForm() {
    return(
        <div>
            <p class="display-5">Lizingo forma:</p>
            <p class="mb-5">Užpildykite šią formą ir laukite mūsų atsakymo. Peržiūrėję jūsų užklausą, pakeisime paraiškos statusą <strong>Paraiškos</strong> skiltyje</p>

            <Form>
                <Form.Group>
                    <Form.Label>Mašinos kaina</Form.Label>
                    <Form.Control type='number' placeholder='0' />
                    <Form.Text>nuo 7000 iki 169000</Form.Text>
                </Form.Group>
                <Button>

                </Button>
            </Form>
        </div>
    );
}