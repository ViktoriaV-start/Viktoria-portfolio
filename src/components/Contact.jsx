export const Contact = ({ focusContact }) => {
  return (
    <>
    <header  className="portfolio__header mt10">Контакты</header>
    <section className="contact">
      <div ref={focusContact} className="contact__text">Я буду рада познакомиться и ответить на ваши вопросы!</div>
      <div className="contact__email">web.brew@yandex.ru</div>
    </section>
    </>
  )
}