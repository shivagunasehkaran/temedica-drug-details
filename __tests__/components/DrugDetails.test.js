import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import DrugDetails from '../../src/components/DrugDetails';

enzyme.configure({adapter: new Adapter()});

describe('drug details component validation', () => {
  it('renders correctly with child drug detail elments', async () => {
    const wrapper = shallow(<DrugDetails />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<DrugDetails />);
    expect(wrapper.find('Text')).toHaveLength(2);
  });
});