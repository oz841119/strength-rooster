import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CodeIcon from '@mui/icons-material/Code';
import { useRouter } from 'next/navigation';
import { useDashboardContext } from './DashboardContext';

const MenuItem = ({ name, path, icon, isActive }: { name: string, path: string, icon: any, isActive: boolean }) => {
  const classNames = `h-10 cursor-pointer flex items-center rounded-lg px-3 ${isActive ? 'text-primary' : ''}`
  const router = useRouter()
  const routerPush = (routeName: string) => {
    router.push(`/dashboard/${routeName}`)
  }
  return (
    <li className={classNames} onClick={() => routerPush(path)}>
      {icon}<span className='ml-2'>{name}</span>
    </li>
  )
}

const Menu = () => {
  const {menuName} = useDashboardContext()
  return (
  <ul className="p-4 flex flex-col gap-2">
    <MenuItem name="記錄訓練" isActive={menuName === '記錄訓練'} icon={<AddIcon />} path="create-training" />
    <MenuItem name="訓練分析" isActive={menuName === '訓練分析'} icon={<AnalyticsIcon />} path="training" />
    <hr style={{ borderColor: '#BBB' }} />
    <MenuItem name="紀錄有氧" isActive={menuName === '紀錄有氧'} icon={<AddIcon />} path="create-aerobic" />
    <MenuItem name="有氧分析" isActive={menuName === '有氧分析'} icon={<DirectionsRunIcon />} path="aerobic" />
    <hr style={{ borderColor: '#BBB' }} />
    <MenuItem name="標籤管理" isActive={menuName === '標籤管理'} icon={<CodeIcon />} path="tag-manage" />
  </ul>
)}

export default function Side() {
  return (
    <div className="w-64 hidden md:block">
      <div className="font-bold h-12 flex justify-center items-center mb-8">S-ROOSTER</div>
      <Menu />
    </div>
  )
}