import React from "react";
class table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const element = this.props.data.map((item, index) => {
      return (
        <div key={index}>
          <table>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
    return <div>{element}</div>;
  }
}
export default table;
