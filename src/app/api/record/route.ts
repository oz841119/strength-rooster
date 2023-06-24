import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {name: '槓鈴臥推', avg_times: '9', avg_weight: 90, groups: 4, date: '05.12'},
    {name: '槓鈴臥推', avg_times: '8', avg_weight: 92, groups: 4, date: '05.19'},
    {name: '槓鈴臥推', avg_times: '8', avg_weight: 90, groups: 5, date: '05.24'},
    {name: '槓鈴臥推', avg_times: '10', avg_weight: 93, groups: 5, date: '05.29'},
    {name: '槓鈴臥推', avg_times: '12', avg_weight: 95, groups: 4, date: '06.02'},
    {name: '槓鈴臥推', avg_times: '9', avg_weight: 90, groups: 5, date: '06.12'},
    {name: '槓鈴臥推', avg_times: '10', avg_weight: 95, groups: 4, date: '06.16'},
    {name: '槓鈴臥推', avg_times: '9', avg_weight: 100, groups: 4, date: '06.20'},
  ])
}