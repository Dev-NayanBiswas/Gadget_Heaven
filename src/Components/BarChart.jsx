import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    Devices: "Mobile Phone",
    uv: 590,
    price: 800,
    rating: 1400,
    cnt: 490
  },
  {
    Devices: "Mobile Phone",
    uv: 868,
    price: 967,
    rating: 1506,
    cnt: 590
  },
  {
    Devices: "Mobile Phone",
    uv: 1397,
    price: 1098,
    rating: 989,
    cnt: 350
  },
  {
    Devices: "Mobile Phone",
    uv: 1480,
    price: 1200,
    rating: 1228,
    cnt: 480
  },
  {
    Devices: "Mobile Phone",
    uv: 1520,
    price: 1108,
    rating: 1100,
    cnt: 460
  },
  {
    Devices: "Mobile Phone",
    uv: 1400,
    price: 680,
    rating: 1700,
    cnt: 380
  },
  {
    Devices: "Mobile Phone",
    uv: 1400,
    price: 680,
    rating: 1700,
    cnt: 380
  },
  {
    Devices: "Mobile Phone",
    uv: 1400,
    price: 680,
    rating: 1700,
    cnt: 380
  },
  {
    Devices: "Mobile",
    uv: 1400,
    price: 680,
    rating: 1700,
    cnt: 380
  },
  {
    Devices: "Mobile Phone",
    uv: 1400,
    price: 1880,
    rating: 1700,
    cnt: 380
  }
];

export default function MyBarChart() {

    const CustomLegend = ({ payload }) => (
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center', gap:10, justifyContent:'center' }}>
            {
            Array.isArray(payload) && payload?.map((elem, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                    <span 
                        style={{
                            width: 12, 
                            height: 12, 
                            backgroundColor: elem.color, 
                            borderRadius: '50%',
                            marginRight: 8
                        }}
                    />
                    {elem.value}
                </li>
            ))}
        </ul>
    );


    return (
        <ComposedChart
            width={window.innerWidth/1.3}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" strokeDasharray="5" />
          <XAxis dataKey="Devices" />
          <YAxis dataKey="price"/>
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Line type="monotone" dataKey="rating" stroke="#ff7300" fill="#ff000080"/>
          <Area type="monotone" dataKey="price" stroke="" fill="#9538E280" />
          <Bar dataKey="price" barSize={50} fill="#9538E2" width="200px" />
        </ComposedChart>
      );
}





{/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="price" stroke="#82ca9d" fillOpacity={1} fill="url(#colorprice)" /> */}