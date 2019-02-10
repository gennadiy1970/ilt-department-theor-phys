[Doc for react-intl](https://github.com/yahoo/react-intl/wiki/Components)

### FormattedMessage

```jsx
<FormattedMessage
  id="app.greeting"
  description="Greeting to welcome the user to the app"
  defaultMessage="Hello, {name}!"
  values={{
    name: <b>Eric</b>
  }}
/>

// const messages = defineMessages({
//   helloWorld2: {
//     id: "app.hello_world2",
//     defaultMessage: "Hello World 2!"
//   }
// });
// <h1>{this.props.intl.formatMessage(messages.helloWorld2)}</h1>;
```

### FormattedDate

```jsx
<FormattedDate year="numeric" month="long" day="2-digit" value="{Date.now()}" />
```

- weekday : 'narrow' | 'short' | 'long',
- era : 'narrow' | 'short' | 'long',
- year : 'numeric' | '2-digit',
- day : 'numeric' | '2-digit',
- hour : 'numeric' | '2-digit',
- minute : 'numeric' | '2-digit',
- second : 'numeric' | '2-digit',
- timeZoneName: 'short' | 'long',
