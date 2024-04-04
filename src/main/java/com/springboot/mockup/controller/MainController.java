package com.springboot.mockup.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.springboot.mockup.dto.ThemaDto;
import com.springboot.mockup.service.MainService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class MainController {
	private final MainService service;

	@GetMapping(path="/")
	public String home() {
		return "index";
	}
	
	@GetMapping(path="/place")
	public ModelAndView getPlaceList() {
		List<ThemaDto> themaList = service.getPlaceThema();
		
		ModelAndView mav = new ModelAndView("place");
		mav.addObject("themaList", themaList);
		
		return mav;
	}
	@GetMapping(path="/rest")
	public ModelAndView getRestList() {
		ModelAndView mav = new ModelAndView("rest");
		
		return mav;
	}
	@GetMapping(path="/acc")
	public ModelAndView getAccList() {
		ModelAndView mav = new ModelAndView("acc");
		
		return mav;
	}
	@GetMapping(path="/post_view")
	public ModelAndView getPost() {
		ModelAndView mav = new ModelAndView("post_view");
		
		return mav;
	}
	
	@GetMapping(path="/post_write")
	public ModelAndView wirtePost() {
		ModelAndView mav = new ModelAndView("post_write");
		
		return mav;
	}
	
}
