import './tempPolyfills'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'

registerRequireContextHook()
Enzyme.configure({ adapter: new Adapter() })
