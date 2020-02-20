package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TestResultModel;

@Repository
public class TestRepository {

	@Autowired
	private NamedParameterJdbcTemplate jdbcTemplate;
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<TestResultModel> executeAthenaQuery() {
		String executeSql = "\n" +
				"select\n" + 
				"    payeraccountid\n" + 
				"    , productcode\n" + 
				"    , lineitemdescription\n" + 
				"    , sum(unblendedcost) as unblendedcost\n" + 
				"from mz.original_lineitem\n" + 
				"where dt = '201809'\n" + 
				"      and payeraccountid in ('215971263326', '163631086345', '063072163778', '432691608930', '140700363406', '377029664781', '089691863076', '138360144590', '024850688454')\n" + 
				"      and lineitemtype = 'Fee'\n" + 
				"group by 1, 2, 3\n" + 
				"order by 1, 2, 3\n" + 
				"\n";
		
		return jdbcTemplate.query(executeSql, new HashMap(), new RowMapper<TestResultModel>() {

			@Override
			public TestResultModel mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
				TestResultModel result = new TestResultModel();
				result.setPayerAccount(rs.getString("payeraccountid"));
				result.setProductCode(rs.getString("productcode"));
				result.setLineItemDescription(rs.getString("lineitemdescription"));
				result.setUnBlendedCost(rs.getDouble("unblendedcost"));
				return result;
			}
		});
	}
}
