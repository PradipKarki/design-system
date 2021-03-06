import React from 'react';
import { Formik } from 'formik';
import { Row, Col } from '@cwds/components/lib/Grid';
import Card from '@cwds/components/lib/Cards';
import FormFeedback from '@cwds/components/lib/FormFeedback';
import FormGroup from '@cwds/components/lib/FormGroup';
import Label from '@cwds/components/lib/Label';
import Select from '@cwds/components/lib/Select';
import CheckboxBank from '@cwds/components/lib/CheckboxBank';

export default () => (
  <Formik
    initialValues={{
      myField: [],
    }}
    onSubmit={_ => {}}
    render={props => {
      const options = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Quo', value: 'quo' },
        { label: 'Qux', value: 'qux' },
      ];
      return (
        <Card>
          <Row>
            <Col md={6}>
              <CheckboxBank
                required
                name="myField"
                legend="My CheckboxBank"
                options={options}
                value={props.values.myField}
                onChange={(field, value) => {
                  props.setFieldValue(field, value);
                }}
              />
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label required>My Select</Label>
                <Select
                  name="myField"
                  options={options}
                  multi
                  value={props.values.myField}
                  onChange={values => {
                    props.setFieldValue(
                      'myField',
                      values.map(({ value }) => value)
                    );
                  }}
                />
                <FormFeedback>{props.errors.myField}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
        </Card>
      );
    }}
  />
);
