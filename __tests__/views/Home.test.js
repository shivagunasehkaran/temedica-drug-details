import Home from '../../src/views/Home';
import enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import InputText from '../../src/components/InputText';

enzyme.configure({adapter: new Adapter()});

describe('Home screen', () => {
  it('renders correctly with all home screen values', async () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render input element properly', async () => {
    const wrapper = shallow(<InputText value={'keyword'} />);
    expect(wrapper).toMatchSnapshot();
  });

  // integration testing
  it('render search results when keyword changes', async () => {
    const onSearch = jest.fn();
    const wrapper = shallow(<InputText value={'keyword'} />);
    wrapper.find('TextInput').simulate('changeTextHandler', 'test search text');
    expect(onSearch).toHaveBeenCalledWith('test search text');
  });

  it('should render the home screen without breaking', async () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('should render state text element', async () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        age: 30,
        name: 'test',
      },
      {
        id: '2',
        age: 31,
        name: 'test1',
      },
    ];
    const wrapper = shallow(<Home item={item} />);
    expect(wrapper.find('FlatList').length).toEqual(0);
  });

  it('navigate: renders correctly with default', async () => {
    const fakeNavigation = {
      push: jest.fn(),
    };
    const wrapper = mount(<Home navigation={fakeNavigation} />);
    var home = wrapper.find('Home');
    const node = home
      .findWhere(node => node.prop('testID') === 'itemAction')
      .at(0);
    node.simulate('click');
  });
});

