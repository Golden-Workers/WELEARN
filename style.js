import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    fontFamily: 'Arial,Helvetica, sans-serif',
    fontSize: [{ unit: 'px', value: 15 }],
    lineHeight: [{ unit: 'px', value: 1.5 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    backgroundColor: '#f4f4f4'
  },
  // global
  container: {
    width: [{ unit: '%H', value: 0.8 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    overflow: 'hidden'
  },
  header: {
    background: '#35424a',
    borderBottom: [{ unit: 'string', value: '#e8491d' }, { unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }],
    color: '#ffffff',
    minHeight: [{ unit: 'px', value: 70 }],
    paddingTop: [{ unit: 'px', value: 30 }]
  },
  'header a': {
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: [{ unit: 'px', value: 16 }]
  },
  'header url': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'header li': {
    float: 'left',
    display: 'inline',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }]
  }
});
