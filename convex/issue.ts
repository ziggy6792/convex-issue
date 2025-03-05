'use node';

/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-return */

// import fabric from 'fabric/node';
import _ from 'lodash';
import { internalAction } from './_generated/server';
// import fabric from 'fabric/node';

const lodashExample = () => {
  const array = _.range(10);
  console.log(array);
};

// const fabricExample = () => {
//   // Create a new fabric canvas
//   const canvas = new fabric.Canvas(undefined, {
//     width: 800,
//     height: 600,
//     renderOnAddRemove: false, // Since we're not rendering on a browser
//   });

//   // Default object options
//   const defaultObjectOptions: Partial<fabric.Object> = {
//     selectable: false,
//     hasControls: false,
//   };

//   // Create the initial workspace rectangle
//   const initialWorkspace = new fabric.Rect({
//     width: 800,
//     height: 600,
//     fill: 'white',
//     name: 'clip',
//     selectable: false,
//     hasControls: false,
//     shadow: new fabric.Shadow({
//       color: 'rgba(0,0,0,0.8)',
//       blur: 5,
//     }),
//     ...defaultObjectOptions,
//   });

//   // Add the workspace to the canvas
//   canvas.add(initialWorkspace);
//   canvas.centerObject(initialWorkspace);
//   canvas.clipPath = initialWorkspace;

//   // Free drawing brush (not usable in Node.js, but setting it for structure)
//   canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);

//   // Add a test rectangle for demonstration
//   const testRect = new fabric.Rect({
//     height: 100,
//     width: 100,
//     fill: 'black',
//     stroke: 'red',
//     strokeWidth: 4,
//     strokeDashArray: [5, 5], // Simulated stroke dash array
//     ...defaultObjectOptions,
//   });

//   canvas.add(testRect);
//   canvas.centerObject(testRect);

//   // Get the canvas JSON representation
//   const canvasJSON = canvas.toJSON();
//   return canvasJSON;
// };

export const answer = internalAction({
  args: {},
  handler: async () => {
    lodashExample();
    // fabricExample();
    return null;
  },
});
