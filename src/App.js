import './App.css';
import Map from './components/Map';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <SearchBar style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }} /> {/* SearchBar 위치 조정 */}
      <Map style={{ flex: 1 }} /> {/* Map이 가능한 모든 공간을 차지하도록 설정 */}
    </div>
  );
}

export default App;
