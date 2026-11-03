import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import Text from './Text'

function App() {
  const [inputValue, setInputValue] = useState('')

  return ( <>
  <div className='container'>
    <Text>Кнопки</Text>
    <Button option='primary' size='large'>Отправить</Button>
    <Button option='primary' size='large' disabled>Отправить</Button>
    <Button option='primary' size='medium'>Отправить</Button>
    <Button option='primary' size='medium' disabled>Отправить</Button>
    <Button option='primary' size='small'>Отправить</Button>
    <Button option='primary' size='small' disabled>Отправить</Button>

    <Button option='secondary' size='small'>Отмена</Button>
    </div>
    <div className='container-text'>
      <Text size = 'xl' weight='bold'>Гостиная Анны Павловны начала понемногу наполняться. 
      Приехала высшая знать Петербурга, люди самые разнородные по возрастам и характерам, но одинаковые по обществу, в каком все жили; 
      приехала дочь князя Василия, красавица Элен, заехавшая за отцом, чтобы с ним вместе ехать на праздник посланника.</Text>
      <br/>
      <Text size="md" style="highlight">Гостиная Анны Павловны начала понемногу наполняться. 
      Приехала высшая знать Петербурга, люди самые разнородные по возрастам и характерам, но одинаковые по обществу, в каком все жили; 
      приехала дочь князя Василия, красавица Элен, заехавшая за отцом, чтобы с ним вместе ехать на праздник посланника.</Text>
      <br/>
      <Text size="xs" style="muted">Гостиная Анны Павловны начала понемногу наполняться.
      Приехала высшая знать Петербурга, люди самые разнородные по возрастам и характерам, но одинаковые по обществу, в каком все жили; 
      приехала дочь князя Василия, красавица Элен, заехавшая за отцом, чтобы с ним вместе ехать на праздник посланника.</Text>
    </div>
    <div className='container-ellipsis'>
    <Text size="sm" ellipsizeMode="tail">Гостиная Анны Павловны начала понемногу наполняться.
      Приехала высшая знать Петербурга, люди самые разнородные по возрастам и характерам, но одинаковые по обществу, в каком все жили; 
      приехала дочь князя Василия, красавица Элен, заехавшая за отцом, чтобы с ним вместе ехать на праздник посланника.</Text>
    <Text size="sm" style="highlight" ellipsizeMode="tail">Гостиная Анны Павловны начала понемногу наполняться.
      Приехала высшая знать Петербурга, люди самые разнородные по возрастам и характерам, но одинаковые по обществу, в каком все жили; 
      приехала дочь князя Василия, красавица Элен, заехавшая за отцом, чтобы с ним вместе ехать на праздник посланника.</Text>
    </div>
    <br/>
    <div>
    <Text size="sm">Имя пользователя</Text>
    <br/>
    <Input 
          size="medium"
          placeholder="Введите ваше имя..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
    </div>
    <br/>
     <div>
        <Text size="sm">Имя пользователя</Text>
        <br/>
        <Input 
          size="small"
          disabled 
          value="Anna" 
        />
      </div>
    </>
  )

}

export default App