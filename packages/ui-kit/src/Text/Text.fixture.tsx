import { Text } from '.';

export default (
  <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '2em', maxWidth: '400px' }}>
    <style>
      {`.custom-style {
        color: green;
      }`}
    </style>
    <Text type="short-l">
      This is for short paragraphs with no more than four lines and is commonly used in components.
    </Text>
    <Text type="long-l">
      This is commonly used in both the expressive and the productive type theme layouts for long paragraphs with more
      than four lines. It is a good size for comfortable, long-form reading. Use this for longer body copy in components
      such as accordion or structured list. Always left-align this type; never center it.
    </Text>
    <Text type="long-m">
      This is for short paragraphs with no more than four lines and is commonly used in components.
    </Text>
    <Text type="short-m">
      This is commonly used in both the expressive and the productive type theme layouts for long paragraphs with more
      than four lines. It is a good size for comfortable, long-form reading. Use this for longer body copy in components
      such as accordion or structured list. Always left-align this type; never center it.
    </Text>
    <Text type="helper">This is for explanatory helper text that appears below a field title within a component</Text>
    <Text type="caption">This is for captions or legal content in a layout—not for body copy</Text>
    <Text type="caption">
      <div className="custom-style">Custom style check</div>
    </Text>
  </div>
);
