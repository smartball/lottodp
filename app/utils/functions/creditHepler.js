import moment from 'moment'
export const initUserCredit = (credit, me, user) => {
  const res = {
    transaction_id: 123,
    data: {},
    statusCode: 200,
    successful: true,
    message: 'โอนเงินสำเร็จ'
  }
  if (me.remaining_credit < credit) {
    credit = me.remaining_credit;
  }

  me.remaining_credit -= credit;
  me.child_credit += credit;
  me.updated_at = moment().utcOffset(7).format('YYYY-MM-DD HH:mm:ss')

  user.init_credit += credit;
  user.remaining_credit += credit;
  user.child_credit = 0;
  user.bet = 0;
  user.updated_at = moment().utcOffset(7).format('YYYY-MM-DD HH:mm:ss')
  const reData = { message: res, me, user }
  // console.log(reData)
  return reData
}

export const updateUserCredit = (credit, dataUser, myLoginName, member) => {
  let res = {}
  if (credit > 0) {
    if (myLoginName === 'manual.config') {
      if (dataUser.remaining_credit < credit) {
        res = {
          transaction_id: 123,
          data: {},
          statusCode: 200,
          successful: false,
          error_code: 1,
          message: 'วงเงินของคุณไม่พอสหรับโอนเงินให้สมาชิกที่อยู่ภายใต้คุณ'
        }
      }
      dataUser.remaining_credit -= credit
      dataUser.child_credit += credit
    }
    member.init_credit += credit
    member.remaining_credit += credit
  } else {
    const pCredit = (-1) * credit
    if (member.remaining_credit < pCredit) {
      res = {
        transaction_id: 123,
        data: {},
        statusCode: 200,
        successful: false,
        error_code: 2,
        message: 'ไม่สามารถถอนเกินวงเงินของสมาชิกได้'
      }
    }
    if (myLoginName === 'manual.config') {
      dataUser.remaining_credit -= pCredit
      dataUser.child_credit += pCredit
    }
    member.init_credit += pCredit
    member.remaining_credit += pCredit
  }
  return res
}

export const addTicket = (member, amount) => {
  let res = {}
  if (member.remaining_credit < amount) {
    res = {
      successful: false,
      error_code: 1,
      message: 'เครดิตไม่พอ'
    }
  } else {
    member.remaining_credit -= amount
    member.bet += amount
    res = {
      successful: true,
      message: 'หักเครดิตสมบูรณ์',
      uncommited_object: member
    }
  }
  // เหลือต่อกับ db
  return res
}

export const ticketCompensate = (member, ticket) => {
  member.send_amount += (ticket.arrearage - ticket.bet)
  member.own_amount = (member.recieve_amount - member.send_amount)

  /// arrearage = ผลตอบแทนรวมต้น
  member.remaining_credit += ticket.arrearage
  member.bet -= ticket.bet
  const res = {
    transaction_id: 123,
    successful: true,
    message: 'หักเครดิตสมบูรณ์'
  }
  return res
}

export const summaryCompensate = (member, summary) => {
  member.recieve_amount += (-1) * summary.receive_amount
  member.own_amount += (-1) * summary.own_amount
  member.send_amount += (-1) * summary.send_amount
  member.remaining_credit += (-1) * summary.send_amount

  // เหลือต่อกับ db
  const res = {
    transaction_id: 123,
    successful: true,
    message: 'หักเครดิตสมบูรณ์'
  }
  return res
}

export const tranfer = (amount, dataUser, member) => {
  let res = {}
  if (member.remaining_credit < amount) {
    res = {
      transaction_id: 123,
      successful: false,
      error_code: 2,
      message: 'เครดิตไม่พอ'
    }
  } else {
    res = {
      transaction_id: 123,
      successful: true,
      message: 'หักเครดิตสมบูรณ์'
    }
  }
  dataUser.recieve_amount -= amount
  member.send_amount -= amount
  member.remaining_credit -= amount

  dataUser.own_amount = dataUser.recieve_amount - dataUser.send_amount
  member.own_amount = member.recieve_amount - member.send_amount
  // เหลือต่อกับ db

  return res
}

export const tranferAffiliate = (request, dataUser, member) => {
  const send_amount = member.send_amount
  let res = {
    transaction_id: 123,
    successful: true,
    message: 'โอนเงินสำเร็จ'
  }
  if (dataUser.remaining_credit < send_amount) {
    res = {
      transaction_id: 123,
      successful: false,
      error_code: 1,
      message: 'วงเงินของคุณไม่พอสหรับโอนเงินให้สมาชิกที่อยู่ภายใต้คุณ'
    }
    return res
  }
  if (dataUser.remaining_credit < 0) {
    res = {
      transaction_id: 123,
      successful: false,
      error_code: 2,
      message: 'วงเงินของคุณไม่พอสหรับโอนเงินให้สมาชิกที่อยู่ภายใต้คุณ'
    }
    return res
  }

  dataUser.remaining_credit -= send_amount
  dataUser.child_credit += send_amount
  member.init_credit += send_amount

  dataUser.recieve_amount -= send_amount
  member.send_amount -= send_amount

  dataUser.own_amount = dataUser.recieve_amount - dataUser.send_amount
  member.own_amount = member.recieve_amount - member.send_amount

  // Update Credit
  const credit = request.credit
  if (credit >= 0) {
    ///user deposit
    if (dataUser.remaining_credit < credit) {
      res = {
        transaction_id: 123,
        successful: false,
        error_code: 3,
        message: 'วงเงินของคุณไม่พอสหรับโอนเงินให้สมาชิกที่อยู่ภายใต้คุณ'
      }
      return res
    }
    dataUser.remaining_credit -= credit;
    dataUser.child_credit += credit;

    member.init_credit += credit;
    member.remaining_credit += credit;
  } else {
    const pCredit = (-1) * credit
    if (member.remaining_credit < pCredit) {
      res = {
        transaction_id: 123,
        successful: false,
        error_code: 4,
        message: 'ไม่สามารถถอนเกินวงเงินของสมาชิกได้'
      }
      return res
    }
    dataUser.remaining_credit += pCredit;
    dataUser.child_credit -= pCredit;

    member.init_credit -= pCredit;
    member.remaining_credit -= pCredit;
  }
  // เหลือต่อกับ db
  return res
}