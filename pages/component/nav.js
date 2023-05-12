import Proptypes, { arrayOf } from 'prop-types'
export default function Nav(props) {
    const { name, age, array } = props;
    console.log("name", name)
    return (
        <div className="h-20 bg-green-200">
            Name : {name}
            <div>
                {/* Age : {parseInt(age) + 5} */}
                Age : {age + 5}
                <div>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                array.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item}</td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table> */}
                </div>

            </div>
        </div>
    )
}


Nav.propTypes = {
    name: Proptypes.string.isRequired,
    age: Proptypes.number.isRequired,
    data: arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired
    })).isRequired
}

Nav.defaultProps = {
    name: "tes",
    age: 12,
    data: []
}