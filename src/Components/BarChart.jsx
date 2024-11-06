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
  Scatter,
} from "recharts";


export default function MyBarChart({data}){
  

    const CustomLegend = ({ payload }) => (
        <ul style={{ listStyleType: 'none', marginTop:10, padding: 0, display: 'flex', alignItems: 'center', gap:10, justifyContent:'center' }}>
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
          <XAxis dataKey="product_title" />
          <YAxis dataKey="price"/>
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Scatter dataKey="rating" fill="red" stroke="yellow"/>
          <Area type="monotone" dataKey="price" stroke="" fill="#9538E280" />
          <Bar dataKey="price" barSize={50} fill="#9538E2" width="200px" />
        </ComposedChart>
      );
}
