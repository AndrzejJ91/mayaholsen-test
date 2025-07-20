

export default function CompanyMap() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.3981538202743!2d8.688665076935894!3d52.27247325452581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba0c216c7e9d65%3A0xd0c030b0e8335aef!2sDachkeramik%20Meyer-Holsen%20GmbH!5e0!3m2!1spl!2sde!4v1751791621669!5m2!1spl!2sde"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        className="border-0 w-full h-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
