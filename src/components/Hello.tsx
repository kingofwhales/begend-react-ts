import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// interface State {
//   enthusiasmLevel: number;
// }

class Hello extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render () {
    if (this.props.enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.props.enthusiasmLevel)}
        </div>
        <div>
          <button onClick={this.props.onDecrement}>-</button>
          <button onClick={this.props.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

// function Hello({ name, enthusiasmLevel = 1 }: Props) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error("You could be a little more enthusiastic. :D");
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }
