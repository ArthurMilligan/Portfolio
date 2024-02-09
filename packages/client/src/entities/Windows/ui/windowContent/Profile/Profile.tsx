import { type FC } from 'react';
import { Heading, Loadbar, Text, TextWithIcon } from '@ui';
import uuid from 'react-uuid';
import { type IProfile } from '../../../model';
import s from './profile.module.scss';

const Profile: FC<IProfile> = ({
  name,
  avatar,
  age,
  about,
  // contacts: { mail, gitHub, telegram },
  proffesion,
  experience,
  education,
  additionalEducation,
  keySkills,
  hardSkills,
  achievements,
  softSkills,
  hobbys,
}) => {
  const intl = new Intl.DateTimeFormat('ru');
  const fromatDate = (date: Date): string => intl.format(new Date(date));

  return (
    <div className={s.profile}>
      <Heading>Портфилио</Heading>
      <Heading level={2}>Общая информация</Heading>
      <div className={s.profile__info}>
        <div className={s.profile__photo}>
          <img src={avatar} alt={`img of ${name}`} />
        </div>
        <div className={s.profile__infoBlock}>
          <Text>
            {name}, {`${age}`}
          </Text>
          <Text bold>{proffesion}</Text>
          <Text>{about}</Text>
        </div>
      </div>
      <Heading level={2}>Контакты</Heading>
      <div className={s.profile__contacts}>
        <TextWithIcon iconName='telegram'>telegram</TextWithIcon>
        <TextWithIcon iconName='github'>github</TextWithIcon>
        <TextWithIcon iconName='mail'>mail</TextWithIcon>
        {/* TODO: сделать тут кнопочки- ссылки на все сети */}
      </div>

      <Heading level={2}>Опыт работы</Heading>
      <div className={s.profile__experience}>
        {experience?.map(({ place, position, dateStart, dateEnd, tasks }) => (
          <div
            key={uuid()}
            className={`${s.profile__infoBlock} ${s.profile__infoBlock_withBorder}`}
          >
            <Heading level={4}>
              {place}, {position}
            </Heading>
            <Text bold>Задачи</Text>
            {tasks?.map((task) => <Text key={uuid()}>{task}</Text>)}
            <Text bold>Период</Text>
            <Text>
              {fromatDate(dateStart)}-{fromatDate(dateEnd)}
            </Text>
          </div>
        ))}
      </div>

      <Heading level={2}>Образование</Heading>
      <div className={s.profile__education}>
        {education?.map(({ place, direction, dateStart, dateEnd }) => (
          <div
            key={uuid()}
            className={`${s.profile__infoBlock} ${s.profile__infoBlock_withBorder}`}
          >
            <Heading level={4}>{place}</Heading>
            <Text>{direction}</Text>
            <Text>
              {fromatDate(dateStart)}-{fromatDate(dateEnd)}
            </Text>
          </div>
        ))}
        {additionalEducation?.map(
          ({ place, courseName, dateStart, dateEnd }) => (
            <div
              key={uuid()}
              className={`${s.profile__infoBlock} ${s.profile__infoBlock_withBorder}`}
            >
              <Heading level={4}>{place}</Heading>
              <Text>{courseName}</Text>
              <Text>
                {fromatDate(dateStart)}-{fromatDate(dateEnd)}
              </Text>
            </div>
          ),
        )}
      </div>
      <div>
        <Heading level={2}>Навыки</Heading>
        <div>
          <Heading level={3}>Ключевые навыки</Heading>
          <div className={s.profile__list}>
            {keySkills?.map((skill) => (
              <TextWithIcon
                key={uuid()}
                iconName='star'
                className={s.profile__textWithIcon}
              >
                {skill}
              </TextWithIcon>
            ))}
          </div>
        </div>
        <div>
          <Heading level={3}>Стек</Heading>
          <div className={s.profile__skillsBlock}>
            {hardSkills?.map(({ name: skillName, level }) => (
              <div key={uuid()} className={s.profile__skill}>
                <Text className={s.profile__hardSkillText}>{skillName} </Text>
                <Loadbar width={200} height={15} value={level / 5} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Heading level={3}>Надпрофессиональные компетен­ции</Heading>
          <div className={s.profile__skillsBlock}>
            {softSkills?.map(({ name: skillName, level }) => (
              <div key={uuid()} className={s.profile__skill}>
                <Text className={s.profile__softSkillText}>{skillName} </Text>
                <Loadbar width={200} height={15} value={level / 5} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Heading level={2}>Достижения</Heading>
        <div className={s.profile__list}>
          {achievements?.map((achievement) => (
            <TextWithIcon
              key={uuid()}
              iconName='star'
              className={s.profile__textWithIcon}
            >
              {achievement}
            </TextWithIcon>
          ))}
        </div>
      </div>
      <div>
        <Heading level={2}>Внерабочие увлечения</Heading>
        <Text>{hobbys}</Text>
      </div>
    </div>
  );
};

export default Profile;
