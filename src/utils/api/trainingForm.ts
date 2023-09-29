// import fetcher from "../fetcher";

type CommonStructure = {name: string, id: number}
type GetUserTrainingFormSelections = () => {menu: Array<CommonStructure>, tags: Array<CommonStructure>, exercises: Array<CommonStructure>}
const getUserTrainingFormSelections: GetUserTrainingFormSelections = () => {
  const menu = [{ name: '胸背腿大重量', id: 13 }, { name: '胸背腿手肩 5RM', id: 32 }, { name: '日常', id: 94 }, { name: '10/12 - 11/15 小重量多次數', id: 87 }]
  const tags = [{ name: '大重量', id: 34 }, { name: '熱身', id: 32 }, { name: '正式', id: 94 }, { name: '高容量', id: 87 }, { name: '遞減組', id: 17 }, { name: '收尾', id: 947 }]
  const exercises = [{ name: '槓鈴平板臥推', id: 34 }, { name: '啞鈴平板臥推', id: 32 }, { name: '紅器械平板臥推', id: 94 }, { name: '藍器械平板臥推', id: 87 }, { name: '槓鈴深蹲', id: 17 }, { name: '傳統硬舉', id: 947 }]
  return {menu, tags, exercises}
}
export { getUserTrainingFormSelections }