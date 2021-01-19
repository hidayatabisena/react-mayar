import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import { GlobalStyle } from './globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1005%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M205.33572220707066 76.78342529557874L279.22404427024725-50.913698114601004 150.27648305262926-53.16448616798979z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M736.064%2c622.155C771.918%2c622.807%2c806.588%2c605.18%2c824.054%2c573.861C841.12%2c543.259%2c834.652%2c506.595%2c817.574%2c476C799.973%2c444.469%2c772.09%2c418.7%2c736.064%2c416.229C695.541%2c413.45%2c651.733%2c427.494%2c632.582%2c463.314C614.145%2c497.799%2c632.101%2c537.996%2c653.446%2c570.76C672.421%2c599.886%2c701.308%2c621.523%2c736.064%2c622.155' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M61.13 324.66 a161.47 161.47 0 1 0 322.94 0 a161.47 161.47 0 1 0 -322.94 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M205.4183635307218 240.35420338609288L310.80932306022623 260.84013067975866 331.2952503538921 155.4491711502542 225.9042908243876 134.9632438565884z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1218.62 397 a127.51 127.51 0 1 0 255.02 0 a127.51 127.51 0 1 0 -255.02 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1075.355%2c164.028C1098.143%2c165.12%2c1120.445%2c153.99%2c1131.827%2c134.218C1143.187%2c114.485%2c1141.32%2c89.8%2c1129.173%2c70.542C1117.793%2c52.5%2c1096.686%2c44.791%2c1075.355%2c44.686C1053.806%2c44.58%2c1031.22%2c51.251%2c1020.611%2c70.007C1010.125%2c88.546%2c1016.825%2c110.813%2c1027.542%2c129.219C1038.174%2c147.479%2c1054.249%2c163.016%2c1075.355%2c164.028' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1005'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #f11d7f;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  &:hover {
      background: #2647f3;
      color: #fff;
    }
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>Dukung karya 🤩</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;